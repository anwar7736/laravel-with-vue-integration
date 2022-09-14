<template>
    <div>
       <h2>All User List</h2>
       <table class="table" id="userTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Register At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in user_list" :key="user.id">
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.created_at.slice(0,10)}}</td>
                    <td>
                        <button class="btn btn-info btn-sm">View</button> |
                        <button class="btn btn-success btn-sm">Edit</button> | 
                        <button class="btn btn-danger btn-sm">Delete</button> </td>
                </tr>
            </tbody>
       </table>
    </div>
</template>
<script>
    import "jquery/dist/jquery.min.js";
    import "bootstrap/dist/css/bootstrap.min.css";
    import "datatables.net-dt/js/dataTables.dataTables";
    import "datatables.net-dt/css/jquery.dataTables.min.css";
    import axios from "axios";
    import $ from "jquery";
    
    export default {
        data(){
            return {
                user_list : [],
            }
        },
        mounted()
        {
            axios.get('/api/all_users')
            .then(res=>{
                this.user_list = res.data;
                $("#userTable").DataTable();
            })
            .catch(err=>{
                console.log(err);
            });
        }
    }
</script>