<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update Meeting</h3>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="meeting.name" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="meeting.description" required>
                </div>

                <div class="form-group">
                    <label>Date</label>
                    <input type="text" class="form-control" v-model="meeting.priority" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Request Meeting</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebaseDb';

    export default {
        data() {
            return {
                meeting: {
                }
            }
        },
        created() {
            let dbRef = db.collection('meetings').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.meeting = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('meetings').doc(this.$route.params.id)
                .update(this.meeting).then(() => {
                    console.log("Meeting successfully updated!");
                    this.$router.push('/list')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>