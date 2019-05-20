<template>
  <div class="test mx-auto">
    <b-input-group class="pad-l">
      <div
        :class="{ onFocused: cActive }"
        class="hugh-container"
      >
        <img
          class="hugh"
          :src="avatar"
        >
      </div>
      <div class="infoblock">
        <span
          class="hugh-is"
          :class="{ onFocused: cActive }"
        >
          HUGH is
        </span>
        <div class="secondline">
          <b-form-input
            id="autoresize"
            v-model="itext"
            :class="{ onFocused: сActive }"
            :maxlength="max"
            class="input-text"
            placeholder="7"
            @focus="Focus(true)"
            @blur="Focus(false)"
            @keyup="tNumber(evt)"
          />
          <p id="hide" />
          <div class="hours-old">
            hours old
          </div>
        </div>
      </div>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: 'TestInput',
  data () {
    return {
      avatar: './static/img/avatar.jpg',
      itext: '',
      evt: '',
      max: 15,
      cActive: false
    }
  },
  methods: {
    tNumber: function (evt) {
      var hide = document.getElementById('hide')
      var txt = document.getElementById('autoresize')
      this.itext = this.itext.replace(/\s/g, '')
      this.itext = this.itext.replace(/\D/g, '')
      this.itext = this.itext.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ')
      hide.textContent = this.itext
      txt.style.width = hide.clientWidth + 'px'
    },
    Focus (state) {
      this.cActive = state
    }
  }
}
</script>
