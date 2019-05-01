// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });


function validateForm({value}) {
  const regex = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
  if(value.match(regex)) {
    // document.form.text.focus();
    return true;
  }
  else {
    document.getElementById('error').style.display='block';
    document.getElementById('email').style.border='1px solid #ff5263';
    event.preventDefault();
    // document.form.text.focus();
    return false;
  }
}