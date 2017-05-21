<template>
    <!--登录界面-->
    <div class="login-page">
        <headerbar></headerbar>
        <div class="container col-xs-6 col-xs-offset-3">
            <form action="/user/signin"
                  method="POST"
                  @submit.prevent>
                <div class="form-group">
                    <input type="text"
                           name="petname"
                           class="form-control"
                           required
                           pattern="^[\u4e00-\u9fa5a-zA-Z0-9]{2,16}$"
                           placeholder="请输入昵称">
                </div>
                <div class="form-group">
                    <input type="password"
                           name="password"
                           class="form-control"
                           pattern="^.{6,16}$"
                           required
                           placeholder="请输入密码">
                </div>
                <input type="submit"
                       class="btn btn-success form-control"
                       value="登录"
                       @click="login()">
            </form>
        </div>
        <!--添加模态框-->
        <div class="modal fade"
             tabindex="-1"
             role="dialog">
            <div class="modal-dialog modal-sm"
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
import Headerbar from '../details/Header'
export default {
    components: {
        Headerbar
    },
    methods: {
        login() {
            $('form').submit(function (ev) {
                ev.preventDefault()

                var data = $(this).serialize()
                // console.log(data)
                // 用$.post()发起请求
                $.post('/user/signin', data, function (res) {
                    if (res.code == 'success') {
                        // 跳转到首页
                        location.href = '/'
                    } else {
                        $('.modal-body').text(res.message)
                        $('.modal').modal('show')
                    }
                })
            })
        }
    }
}
</script>