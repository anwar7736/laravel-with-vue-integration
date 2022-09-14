<template>
    <div>
        <Header></Header>
            <About></About>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from '../layouts/HeaderComp.vue';
    import About from '../components/AboutComp.vue';
    import Footer from '../layouts/FooterComp.vue';
    export default {
        data(){
            return {

            }
        },
        components : {
            Header,
            About,
            Footer
        }
    }
</script>