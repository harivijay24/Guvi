jQuery('#contactForm').on('submit',function(e){
    if(jQuery('#p1').val()!=jQuery('#p2').val())
    {
        jQuery('#thank_you_msg').html("");
        jQuery('#thank_you_msg').html('Password did not match');
        e.preventDefault();
    }
    else{
        jQuery('#thank_you_msg').html("");
        jQuery('#btn').val('Please wait...');
        jQuery('#btn').attr('disabled',true);
        jQuery.ajax({
             url:'/Guvi/php/register.php',
             type:'post',
             data:jQuery('#contactForm').serialize(),
            success:function(result){
            jQuery('#thank_you_msg').html('Successfully Registered');
            jQuery('#contactForm')['0'].reset();
            jQuery('#btn').val('Submit Now');
            jQuery('#btn').attr('disabled',false);
        }
    });
    e.preventDefault();}
});
