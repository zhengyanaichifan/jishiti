/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...











$(function () {
// var data = [
//     { index: 1, name: '吃饭' },
//     { index: 2, name: '睡觉' },
//     { index: 3, name: '打豆豆' }
// ]


let num = 0
var data = JSON.parse(window.localStorage.getItem('data')) || []
var finish = JSON.parse(window.localStorage.getItem('com')) || []
// console.log(data)
// console.log(finish)


// 1.渲染页面
bindHtml ()
Done ()
$('form input').on('keydown', function (e) {

    console.log(this)
    const value = this.value.trim()
    console.log(value)
    if (!value) return


    var code = e.keyCode || e.which
    console.log(code)
    // console.log('鼠标按下了')
    if (code == 13) {
        data.push($('form input').val())
        $('form input').val('')
        console.log(data)

        window.localStorage.setItem('data', JSON.stringify(data))
        bindHtml()
        Done()
    }

})


$('#todolist').on('click', 'li input', function () {
    console.log('我被点击了')
    const flag = this.checked
    const id = $(this).data('id')

    if (flag) {
        finish.push(data[id])
        data.splice(id , 1)
        window.localStorage.setItem('data', JSON.stringify(data))
        window.localStorage.setItem('com', JSON.stringify(finish))
        bindHtml()
        Done()
    }
})


$('#todolist').on('click', 'li > a', function () {
    console.log('我被点击了')
    const id = $(this).data('id')
    data.splice(id , 1)
    window.localStorage.setItem('data', JSON.stringify('data',data))
    bindHtml()
})


$('#donelist').on('click' , 'li > input' , function(){
    const flag = this.checked
    const id = $(this).data('id') 
    console.log(id)
    console.log(flag)
    if(!flag){
      data.push(finish[id])
      finish.splice(id , 1)
      console.log(finish , data)
    }
    window.localStorage.setItem('data' , JSON.stringify(data))
    window.localStorage.setItem('com' , JSON.stringify(finish))
    bindHTML()
    Done()
  })

  $('#donelist').on('click' , 'li > a' , function(){
      console.log('我被点击了')
    console.log($(this).data('id'))
    const id = $(this).data('id')
    finish.splice(id , 1)
    window.localStorage.setItem('finish' , JSON.stringify(finish))
    Done()
  })



$('#todolist').on('click', 'li > p', function () {
    console.log('我被点击了')
    function edit (a) {
        console.log(a)
    }
})




function bindHtml () {
    let str = ``
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i])
        str += `
            <li>
                <input type="checkbox" data-id=${ i }/>
                <p class="context" onclick="" data-id=${ i }>${ data[i] }</p>
                <a data-id=${ i }">-</a>
            </li>
        `
    }
    $('#todolist').html(str)
    $('#todocount').html(data.length)
}

function Done() {
    let str = ``
    for (let i = 0; i < finish.length; i++) {
        str += `
            <li>
              <input type="checkbox" checked="checked" data-id = ${ i }>
              <p onclick="edit(${ i })">${ finish[i] }</p >
              <a data-id="${ i }">-</ a>
            </li>
        `

        num++
    }
    $('#donecount').html(finish.length)
    $('#donelist').html(str)
}

})
