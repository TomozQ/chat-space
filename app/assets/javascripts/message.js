$(function(){
  function buildHTML(message){
    if (message.image) {
      let html = `<div class="chat-main__message-list__contents__content">
                    <div class="chat-main__message-list__contents__content__member-name">
                      ${message.user_name}
                    </div>
                    <div class="chat-main__message-list__contents__content__time-stamp">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="chat-main__message-list__contents__message">
                    <p class="Message__content">
                      ${message.content}
                    </p>
                    <img class="chat-main__message-list__contents__message__Message-image" src="${message.image}">
                  </div>`
      return html;
    } else {
      let html = `<div class="chat-main__message-list__contents__content">
                    <div class="chat-main__message-list__contents__content__member-name">
                      ${message.user_name}
                    </div>
                    <div class="chat-main__message-list__contents__content__time-stamp">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="chat-main__message-list__contents__message">
                    <p class="Message__content">
                      ${message.content}
                    </p>
                  </div>`
      return html
    }
}
  $(function(){
    $('.chat-main__message-form__Form').on("submit", function(e){
      
      e.preventDefault();
      let formData = new FormData(this);
      let url = $(this).attr('action');

      $.ajax({
        url: url,  //同期通信でいう『パス』
        type: 'POST',  //同期通信でいう『HTTPメソッド』
        data: formData,  
        dataType: 'json',
        processData: false,
        contentType: false
      })

    .done(function(data){
      let html = buildHTML(data);
      $('.chat-main__message-list').append(html);
      $('form')[0].reset();
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('.chat-main__message-form__Form__btn-send').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.chat-main__message-form__Form__btn-send').prop('disabled', false);
  });
  })
})
});