<script>
  export default {
    name: 'modal',

    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">  
                    <slot name="closebutton">default close button</slot>                                         
                    <div class="modal-header">
                        <slot name="header">default header</slot>
                        <slot name="subHeader">default sub-header</slot>
                    </div>                    
                    <div class="modal-body">
                        <slot name="body">default body</slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>