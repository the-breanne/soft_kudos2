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
                    <tr v-for="meeting in Meetings" :key="meeting.key">
                        <td>{{ meeting.name }}</td>
                        <td>{{ meeting.description }}</td>
                        <td>{{ meeting.date }}</td>
                        <td>{{ task.priority }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: meeting.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteMeeting(meeting.key)" class="btn btn-danger">Delete</button>
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
                Meetings: []
            }
        },
        created() {
            db.collection('meetings').onSnapshot((snapshotChange) => {
                this.Meetings = [];
                snapshotChange.forEach((doc) => {
                    this.Meetings.push({
                        key: doc.id,
                        name: doc.data().name,
                        description: doc.data().description,
                        date: doc.data().date
                    })
                });
            })
        },
        methods: {
            deleteMeeting(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("meetings").doc(id).delete().then(() => {
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