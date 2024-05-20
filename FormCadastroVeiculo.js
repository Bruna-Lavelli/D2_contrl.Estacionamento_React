import React from 'react';

function FormCadastroVeiculo() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de cadastro de veículo aqui
  };

  return (
    <form className="cadastro_veiculo" onSubmit={handleSubmit}>
      <h1>Controle de Estacionamento do Condomínio</h1>
      <h2>Formulário de cadastro de veículo</h2>
      <p>Olá, morador! Aqui você poderá cadastrar seu veículo para termos um melhor controle e segurança nas vagas do condomínio. Em caso de dúvida, entre em contado com a administração, cujo contato está localizado no Footer dessa página.</p>
      <div className="input-group">
        <label htmlFor="placaveiculo">Placa do veículo: </label>
        <input type="text" id="placaveiculo" name="placaveiculo" required />
      </div>
      <div className="input-group">
        <label htmlFor="nomeproprietario">Nome do proprietário: </label>
        <input type="text" id="nomeproprietario" name="nomeproprietario" required />
      </div>
      <div className="input-group">
        <label htmlFor="numeroapartamento">Número do apartamento: </label>
        <input type="number" id="numeroapartamento" name="numeroapartamento" required />
      </div>
      <div className="input-group">
        <label htmlFor="blocoapartamento">Bloco do apartamento: </label>
        <input type="text" id="blocoapartamento" name="blocoapartamento" required />
      </div>
      <div className="input-group">
        <label htmlFor="modeloveiculo">Modelo do veículo: </label>
        <input type="text"id="modeloveiculo" name="modeloveiculo" required />
      </div>
      <div className="input-group">
        <label htmlFor="corveiculo">Cor do veículo: </label>
        <input type="text" id="corveiculo" name="corveiculo" required />
      </div>
      <div className="input-group">
        <label htmlFor="numerovaga">Número da vaga de estacionamento: </label>
        <input type="number" id="numerovaga" name="numerovaga" required />
      </div>
      <div className ="button-group">
        <button type="submit">Salvar</button>
      </div>
    </form>
  );
}

export default FormCadastroVeiculo;
