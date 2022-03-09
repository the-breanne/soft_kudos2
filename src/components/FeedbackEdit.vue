<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update Feedback</h3>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="feedback.name" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="feedback.description" required>
                </div>



                <div class="form-group">
                    <button class="btn btn-primary btn-block">Request Feedback</button>
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
                feedback: {
                }
            }
        },
        created() {
            let dbRef = db.collection('feedbacks').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.feedback = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('feedbacks').doc(this.$route.params.id)
                .update(this.feedback).then(() => {
                    console.log("Feedback successfully updated!");
                    this.$router.push('/list')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>