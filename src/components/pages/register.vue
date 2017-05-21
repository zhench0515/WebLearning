<template>
    <!--注册界面-->
    <div class="register-page">
        <headerbar></headerbar>
        <div class="container col-xs-6 col-xs-offset-3">
            <form action="/user/register"
                  method="POST"
                  @submit.prevent>
                <div class="form-group">
                    <!--
                                        ^[\u4e00-\u9fa5a-zA-Z0-9]{2,16}$表示允许汉字、大小写字母、数字，长度为2~16位
                                    -->
                    <input type="text"
                           class="form-control"
                           name="petname"
                           required
                           pattern="^[\u4e00-\u9fa5a-zA-Z0-9]{2,16}$"
                           placeholder="请输入您的昵称">
                </div>
                <div class="form-group">
                    <!--
                                        ^[\u4e00-\u9fa5a-zA-Z0-9]{2,16}$表示允许汉字、大小写字母、数字，长度为2~16位
                                    -->
                    <input type="email"
                           class="form-control"
                           required
                           pattern="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$"
                           placeholder="请输入您的邮箱">
                </div>
                <div class="form-group">
                    <!--
                                        ^.{6,16}$表示一个正则表达式，长度是6~16位
                                        .表示除换行符以外的所有字符
                                    -->
                    <input type="password"
                           class="form-control"
                           name="password"
                           required
                           pattern="^.{6,16}$"
                           placeholder="请输入密码">
                </div>
                <div class="form-group">
                    <input type="password"
                           class="form-control"
                           required
                           pattern="^.{6,16}$"
                           placeholder="请再次输入密码">
                </div>
    
                <input type="submit"
                       class="btn btn-success form-control"
                       value="注册"
                       @click="register()">
            </form>
        </div>
        <!--模态框-->
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
        register() {
            $('form').submit(function (ev) {
                // 判断两次输入的密码是否一致
                var pass = $(':password').map(function () {
                    return $(this).val()
                })
                console.log(pass)
                if (pass[0] == pass[1]) {
                    // console.log('两次密码一致，可以提交')
                    // 把表单数据序列为字符串
                    var data = $(this).serialize()
                    // console.log(data)

                    $.post('/user/register', data, function (res) {
                        // 更改模态框内容
                        $('.modal-body').text(res.message)
                        // 弹模态框
                        $('.modal').modal('show')
                            .on('hidden.bs.modal', function () {
                                if (res.code == 'success') {
                                    location.href = 'http://localhost:8080/#/login'
                                }
                            })
                    })
                }
                else {
                    $('.modal-body').text('两次输入的密码不一致')
                    $('.modal').modal('show')
                }
            })
        }
    }
}
</script>

<style lang="less">
.modal-title {
    text-align: center;
}
</style>