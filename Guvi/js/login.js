jQuery('#contactForm').on('submit',function(e){

 
        jQuery('#thank_you_msg').html("");
        jQuery('#btn').val('Please wait...');
        jQuery('#btn').attr('disabled',true);
        jQuery.ajax({
             url:'/Guvi/php/login.php',
             type:'post',
             data:jQuery('#contactForm').serialize(),
            success:function(result){
            jQuery('#thank_you_msg').html('Successfully Registered');
            jQuery('#contactForm')['0'].reset();
            jQuery('#btn').val('Submit Now');
            jQuery('#btn').attr('disabled',false);
        }
    });
    e.preventDefault();
});
