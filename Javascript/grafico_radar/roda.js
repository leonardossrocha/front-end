// Função que atualiza a roda com os valores inseridos pelo usuário
function updateWheel() {
    // Obtém o elemento canvas da roda e o contexto 2D para desenhar
    const canvas = document.getElementById('wheel');
    const ctx = canvas.getContext('2d');
   
    // Coleta os valores dos inputs, convertendo-os de string para inteiros
    const values = [
        parseInt(document.getElementById('autoconhecimento').value, 10),
        parseInt(document.getElementById('autoestima').value, 10),
        parseInt(document.getElementById('gestaoEmocoes').value, 10),
        parseInt(document.getElementById('relacionamentos').value, 10),
        parseInt(document.getElementById('empatia').value, 10),
        parseInt(document.getElementById('comunicacao').value, 10),
        parseInt(document.getElementById('proposito').value, 10),
        parseInt(document.getElementById('autocontrole').value, 10),
        parseInt(document.getElementById('motivacao').value, 10),
        parseInt(document.getElementById('bemEstar').value, 10),
        parseInt(document.getElementById('aceitacao').value, 10),
        parseInt(document.getElementById('confianca').value, 10)
    ];
 
    // Define o número de seções na roda com base nos valores coletados
    const numSections = values.length;
 
    // Calcula o raio da roda, subtraindo uma margem de 40 pixels
    const radius = canvas.width / 2 - 40;
 
    // Define o centro da roda (tanto x quanto y) como a metade da largura do canvas
    const center = canvas.width / 2;
 
    // Calcula o ângulo entre cada seção da roda
    const angleStep = (2 * Math.PI) / numSections;
 
    // Limpa o canvas antes de redesenhar
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 
    // Desenha as seções da roda conectando os valores
    ctx.beginPath();
    for (let i = 0; i < numSections; i++) {
        const angle = i * angleStep;  // Calcula o ângulo atual para a seção
        const value = (values[i] / 10) * radius;  // Escala o valor (0-10) para o tamanho da roda
        const x = center + value * Math.cos(angle);  // Calcula a coordenada x do ponto
        const y = center - value * Math.sin(angle);  // Calcula a coordenada y do ponto
        ctx.lineTo(x, y);  // Traça uma linha até o ponto calculado
    }
    ctx.closePath();  // Fecha o caminho (último ponto de volta ao primeiro)
 
    // Preenche a roda com uma cor azul semi-transparente
    ctx.fillStyle = 'rgba(74, 144, 226, 0.3)';
    ctx.fill();
 
    // Desenha o contorno da roda com uma linha azul mais forte
    ctx.strokeStyle = '#4A90E2';
    ctx.lineWidth = 2;
    ctx.stroke();
 
    // Desenha as linhas divisórias entre as seções da roda
    ctx.beginPath();
    for (let i = 0; i < numSections; i++) {
        const angle = i * angleStep;  // Calcula o ângulo atual
        const xEnd = center + radius * Math.cos(angle);  // Coordenada x da extremidade da linha
        const yEnd = center - radius * Math.sin(angle);  // Coordenada y da extremidade da linha
        ctx.moveTo(center, center);  // Move para o centro da roda
        ctx.lineTo(xEnd, yEnd);  // Desenha a linha até a borda da roda

        // Adiciona o número do campo no final de cada linha divisória
        ctx.font = '16px Arial';
        ctx.fillStyle = '#000000'; // Cor do texto
        const labelX = center + (radius + 20) * Math.cos(angle); // Ajusta a posição X para fora do círculo
        const labelY = center - (radius + 20) * Math.sin(angle); // Ajusta a posição Y para fora do círculo
        ctx.fillText(i + 1, labelX, labelY); // Desenha o número do campo
    }
    ctx.closePath();  // Fecha o caminho (último ponto de volta ao primeiro)
   
    // Define a cor e largura das linhas divisórias e as desenha
    ctx.strokeStyle = '#4A90E2';
    ctx.lineWidth = 1;
    ctx.stroke();
}
 
// Chama a função updateWheel para desenhar a roda quando o script é carregado
updateWheel();