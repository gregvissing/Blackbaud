<template>
    <section id="footer">
        <div class="container centerAlign pdfVersion">
            <a href="https://issuu.com/roetj/docs/ucf_annual_report_fy18_final_high_r" target="_default">View PDF Version</a>
        </div>
        <div class="container centerAlign">
            <img class="logo" :src="logo" />
        </div>
        <div class="container">
            <div class="one-third">
                <h2>{{ contactTitle }}</h2>
                <p>{{ institution }}</p>
                <p>{{ poBox }} | {{ citySt }} {{ zip }}</p>
                <p>{{ phone }} | {{ altPhone }}</p>
                <p>{{ fax }} | <a :href="'mailto:' + email">{{ email }}</a></p>
            </div>
            <div class="one-third">
                <h2>{{ campusTitle }}</h2>
                <p><a :href="campusGoogleMapLink">{{ campusBuilding }}<br />{{ campusAddress }} | {{ campusCityStZip }}</a></p>
            </div>
            <div class="one-third">
                <h2>{{ signUpTitle }}</h2>
                <p>{{ signUpText }}</p>
                <p class="margin-top-bottom-10"><a class="button" :href="signUpButtonLink">SIGN UP NOW</a></p>
                <p><a :href="privacyPolicyLink">UC Foundation Privacy Policy</a></p>
            </div>
        </div>
        <div class="copyright container centerAlign">
            <p>Copyright Information | &copy; 2018 University of Cincinnati</p>
        </div>            
    </section>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    logo: String,
    contactTitle: String,
    institution: String,
    poBox: String,
    citySt: String,
    zip: String,
    phone: String,
    altPhone: String,
    fax: String,
    email: String,
    campusTitle: String,
    campusGoogleMapLink: String,
    campusBuilding: String,
    campusAddress: String,
    campusCityStZip: String,
    signUpTitle: String,
    signUpText: String,
    signUpButtonLink: String,
    privacyPolicyLink: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
