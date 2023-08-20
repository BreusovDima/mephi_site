function toggleNavBar(){
var element1 = document.getElementById("sidebar_id");
element1.classList.toggle('sidebar_active');
var element2 = document.getElementById("contentID");
element2.classList.toggle('content_active');
var element3 = document.getElementById("sidebar-wrapper");
element3.classList.toggle('sidebar-wrapper_active');
}