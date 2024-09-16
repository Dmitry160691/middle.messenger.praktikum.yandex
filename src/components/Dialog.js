export default `
<div 
{{#if isYou}}
  class="send"
  {{else}}
  class="receive"
{{/if}}
>
{{text}}
</div>
`;
