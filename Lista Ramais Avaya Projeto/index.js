const app = new Vue({
  
  el: '#app',
  
  data: {
     search: '',
     items: [
       {name: '31199', type: 'contratos'},
       {name: '31198', type: 'canais'},
       {name: '31197', type: 'tesouraria'},
       {name: '31196', type: 'relacionamentos'},
       {name: '31200', type: 'ura principal'},
       {name: '31201', type: 'comercial (Vendas)'},
       {name: '31203', type: 'assistência técnica (instalação e chamados)'},
       {name: '31204', type: 'escritório (agendamento de treinamento e implantação)'},
       {name: '31205', type: 'financeiro'},
       {name: '31206', type: 'ouvidoria'},
       {name: '31207', type: 'recepção'},
       {name: '31211', type: 'geração de chave'},
       {name: '31212', type: 'sysPDV'},
       {name: '31213', type: 'varejo fácil'},
       {name: '31214', type: 'milênio'},
       {name: '31215', type: 'migração'}
     ]
  },
  
  computed: {
    filteredItems() {
      return this.items.filter(item => {
         return item.type.indexOf(this.search.toLowerCase()) > -1
      })
    }
  }
  
})