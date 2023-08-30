loginRules: {
    username: [
        { required:true, message: '请输入用户名',tigger: 'blur'},
        { min: 1,max:16,message:'长度在5到16个字符',tigger:'blur'}
    ]
    password:[
        { required:true, message: '请输入密码',tigger: 'blur'},
        { min: 1,max:16,message:'长度在5到16个字符',tigger:'blur'}

    ]
}