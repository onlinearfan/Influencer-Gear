<script>
document.querySelector('.hamberger').addEventListener('click', function () {
    document.querySelector('.main-menu').classList.toggle("translate");
    document.querySelector('.fa-shopping-cart').classList.toggle("d-none-cart")
    document.querySelector('.fa-bars').classList.toggle("fa-times")

})
</script>