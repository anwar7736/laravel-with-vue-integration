<template>
    <div>
        <Header></Header>
            <Home></Home>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from '../layouts/HeaderComp.vue';
    import Home from '../components/HomeComp.vue';
    import Footer from '../layouts/FooterComp.vue';
    export default {
        data(){
            return {

            }
        },
        components : {
            Header,
            Home,
            Footer
        }
    }
</script>