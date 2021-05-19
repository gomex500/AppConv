const {re} = require('ejs');

exports.home1 = (req,res) => {
    res.render('home',{
        title: 'AppConv'
    })
}

exports.home2 = (req,res) => {
    res.render('home2',{
        title: 'AppConv'
    })
}

exports.home3 = (req,res) => {
    res.render('home3',{
        title: 'AppConv'
    })
}