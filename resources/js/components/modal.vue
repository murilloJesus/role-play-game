<template>
  <div
    ref="refModal"
    class="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <slot name="body">
            Are you sure?
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn btn-primary"
            >
              Save changes
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {
        onMounted,
        reactive,
        ref,
        watch
    } from 'vue'
    import {
        Modal
    } from 'bootstrap'

    export default {
        props: {
          visible : {
            type: Object,
            default: () => {
              return {
                visible:false
              }
            }
          }
        },
        setup(props) {

            const refModal = ref(null)

            var modal = reactive({})

            onMounted(() => {
                modal = new Modal(refModal.value, {
                  backdrop:false
                })
                $(refModal.value).on("hide.bs.modal", () => {
                    props.visible.tell(false)
                })
            })

            watch(() => props.visible.visible.value, (newValue) => {
                if (newValue) {
                    modal.show()
                } else {
                    modal.hide()
                }
            })

            return {
                refModal,
                modal
            }


        }
    }

</script>