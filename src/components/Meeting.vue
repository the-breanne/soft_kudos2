<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Request Meeting</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Request 1-on-1 With:</label>
                    <input type="text" class="form-control" v-model="meeting.name" required>
                </div>

                <div class="form-group">
                    <label>Date</label>
                    <input type="text" class="form-control" v-model="meeting.date" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="meeting.description" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Request</button>
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
                    alert("Meeting successfully requested!");
                    this.meeting.name = ''
                    this.meeting.date = ''
                    this.meeting.description = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>