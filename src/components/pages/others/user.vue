<template>
    <!--用户界面-->
    <div class="user-page">
        <headerbar></headerbar>
        <div class="container col-xs-6 col-xs-offset-3">
            <form action="/user/photo"
                  method="POST"
                  enctype="multipart/form-data">
                <div class="form-group">
                    <input type="file"
                           name="photo"
                           required
                           accept=".jpg, .bmp, .png">
                </div>
                <input type="submit"
                       value="上传头像"
                       class="btn btn-success form-control">
            </form>
        </div>
    
        <div class="modal fade"
             tabindex="-1"
             role="dialog">
            <div class="modal-dialog"
                 role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">前端网</h4>
                    </div>
                    <div class="modal-body">
    
                    </div>
                    <div class="modal-footer">
                        <button type="button"
                                class="btn btn-default"
                                data-dismiss="modal">确定</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
    </div>
</template>
<script>
    import '../../details/Header.vue'

    export default{
        components:{
            Headerbar
        }
    }
</script>

<style lang="less" scoped>

</style>