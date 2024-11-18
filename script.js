$(document).ready(function() {
  function renderTable(dados){
      const table = $('#resultado')
      table.empty()

      if (dados.length === 0) {
          table.append(`<p>Não encontrado</p>`)
      }else{
          dados.forEach(item => {
              table.append(`
                  <tr>
                      <td>${item.Codigo}</td>
                      <td>${item.Nome}</td>
                      <td>${item.Cidade}</td>
                      <td>${item.DataInicio}</td>
                      <td>${item.DataFim}</td>
                      <td>${item.Cargo}</td>
                      <td>${item.Responsavel}</td>
                      <td>${item.Efetivo}</td>
                  </tr>
                  `)
          })
      }
  }

  function filtrarDados() {
      const nome = $('#nome').val().toUpperCase()
      const cidade = $('#cidade').val().toUpperCase()
      const dataInicio = $('#dataInicio').val()
      const dataFim = $('#dataFim').val()

      const resultados = dados.filter(item => {
          const nomeMatch = nome === "" || item.Nome.toUpperCase().includes(nome)
          const cidadeMatch = cidade === "" || item.Cidade.toUpperCase().includes(cidade)
          const dataInicioMatch = dataInicio === "" || item.DataInicio >= dataIniciocio()
          const dataFimMatch = dataFim === "" || item.DataFim
          
          return nomeMatch && cidadeMatch && dataInicioMatch && dataFimMatch
      })
  renderTable(resultados);
  }

  $('#filtrar').on('click', filtrarDados);

  $('#limpar').on('click', function() {
      location.reload()
      renderTable(dados)
  })
  renderTable(dados)
})