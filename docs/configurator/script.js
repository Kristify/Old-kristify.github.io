import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      pkey: '',
      name: '',
      self: '',
      storage: [],
      storageFields: 1,
      noMetaname: '',
      nonexistantItem: '',
      notenoughMoney: '',
      notenoughStock: '',
      change: '',
      startedSound: '',
      purchaseSound: '',
      errorSound: '',
      webhookType: '1',
      webhook: '',
      result: '',
    };
  },

  methods: {
    getStorage() {
      const lines = [];

      for (let chest of this.storage) {
        lines.push(`      "${chest}",`);
      }

      return lines.join('\n');
    },

    generate() {
      this.result = `
return {
  pkey = "${this.pkey}",
  name = "${this.name}",
  storage = {
${this.getStorage()}
  },
  self = "${this.self}",
  messages = {
    noMetaname      = "${this.noMetaname}",
    nonexistantItem = "${this.nonexistantItem}",
    notenoughMoney  = "${this.notenoughMoney}",
    notenoughStock  = "${this.notenoughStock}",
    change          = "${this.change}"
  },
  webhooks = {
    {
      type = "${this.webhookType}",
      url = "${this.webhook}"
    }
  },
  sounds = {
    started = "${this.startedSound}",
    purchase = "${this.purchaseSound}",
    error = "${this.errorSound}"
  }
}
      `;
    },
  },
}).mount('#main');
