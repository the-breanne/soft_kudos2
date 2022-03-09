<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="feedback in Feedbacks" :key="feedback.key">
                        <td>{{ feedback.name }}</td>
                        <td>{{ feedback.description }}</td>

                        <td>
                            <router-link :to="{name: 'edit', params: { id: feedback.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteFeedback(feedback.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebaseDb';
    
    export default {
        data() {
            return {
                Feedbacks: []
            }
        },
        created() {
            db.collection('feedbacks').onSnapshot((snapshotChange) => {
                this.Feedbacks = [];
                snapshotChange.forEach((doc) => {
                    this.Feedbacks.push({
                        key: doc.id,
                        name: doc.data().name,
                        description: doc.data().description,

                    })
                });
            })
        },
        methods: {
            deleteFeedback(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("feedbacks").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        }
    }
</script>

<style>
    .btn-primary {
        margin-right: 12px;
    }
</style>