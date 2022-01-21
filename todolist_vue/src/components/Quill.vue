<template>
  <div>
    <quill-editor
        v-model="content"
        :options="quillConfig"
    />

    <button @click="saveContent">저장</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      quillConfig: {
        theme: "snow",
        placeholder: "",
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']
          ]
        }
      }
    };
  },
  methods: {
    saveContent() {
      console.log(this.content);
    }
  }
}

</script>

<style>

</style>