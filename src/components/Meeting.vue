<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Request Meeting</h3>
            <form @submit.prevent="onFormSubmit">
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
                    <input type="text" class="form-control" v-model="meeting.date" required>
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
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('meetings').add(this.meeting).then(() => {
                    alert("Meeting successfully created!");
                    this.meeting.name = ''
                    this.meeting.description = ''
                    this.meeting.date = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>