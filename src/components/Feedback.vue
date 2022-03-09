<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Request Feedback</h3>
            <form @submit.prevent="onFormSubmit">
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
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('feedbacks').add(this.feedback).then(() => {
                    alert("Feedback successfully requested!");
                    this.feedback.name = ''
                    this.feedback.description = ''

                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>