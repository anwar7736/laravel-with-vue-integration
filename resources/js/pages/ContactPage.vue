<template>
    <div>
        <Header></Header>
            <Contact></Contact>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from '../layouts/HeaderComp.vue';
    import Contact from '../components/ContactComp.vue';
    import Footer from '../layouts/FooterComp.vue';
    export default {
        data(){
            return {

            }
        },
        components : {
            Header,
            Contact,
            Footer
        }
    }
</script>