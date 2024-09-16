export default `<div class="contact-container">
  <div class="contact-avatar"></div>
  <div class="contact">
    <div class="contact-header">
      <div class="contact-name"><p>{{name}}</p></div>
      <div class="contact-time"><p>{{time}}</p></div>
    </div>
    <div class="contact-text">{{#if you}}<p>Вы: </p>{{/if}}<p>{{text}}</p></div>
  </div>
</div>`;
