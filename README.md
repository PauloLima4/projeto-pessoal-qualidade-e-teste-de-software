Controle de Senhas - Sistema de Fila de Atendimento
📋 Descrição
O Controle de Senhas é um sistema desenvolvido para gerenciar senhas de uma fila de atendimento, útil em diversos contextos onde há a necessidade de organizar o atendimento de pessoas em uma sequência específica. Ele gera senhas automaticamente, chama a próxima senha da fila e permite o gerenciamento de senhas pendentes e atendidas, facilitando o trabalho em ambientes como hospitais, bancos, lojas ou qualquer outro lugar que precise de um controle ordenado e eficiente para atendimento ao público.

💡 Problema que Resolve
Este sistema resolve o problema de organizar e controlar filas de atendimento, garantindo que cada pessoa seja atendida na ordem correta. Ele:

Gera senhas automaticamente, evitando confusão ou perda de ordem no atendimento.

Gerencia senhas pendentes e atendidas, mantendo o fluxo de atendimento controlado.

Exibe a senha atual sendo atendida, para que todos saibam qual é a próxima na fila.

Sem uma ferramenta como essa, o atendimento manual pode ser propenso a erros, como esquecer qual foi a última senha chamada, ou perder a ordem do atendimento, o que gera frustração tanto para o cliente quanto para os atendentes.

🎯 Público-Alvo
Este sistema pode ser utilizado por:

Hospitais: Organizar o atendimento de pacientes nas unidades de emergência ou em consultórios.

Bancos e Instituições Financeiras: Gerenciar a fila de atendimento ao cliente, garantindo que todos sejam atendidos de forma ordenada.

Lojas e Comércio Varejista: Organizar o atendimento de clientes no caixa ou em balcões de atendimento, evitando sobrecarga de filas.

Serviços Públicos: Como órgãos municipais ou estaduais que necessitam organizar filas de atendimento ao público.

⚙️ Funcionalidades
Gerar Senhas: O sistema gera uma nova senha automaticamente com base no contador sequencial.

Chamar Senha: A função de "chamar próxima senha" retira a senha da fila de pendentes e a move para atendidas.

Mostrar Senha Atual: Exibe qual é a senha que está sendo atendida no momento.

Listar Senhas Pendentes e Atendidas: Visualização fácil das senhas pendentes e já atendidas.

Resetar Sistema: Em caso de necessidade, é possível resetar todo o sistema, reiniciando a fila.

🛠️ Tecnologias Utilizadas
JavaScript Puro: Toda a lógica foi implementada em JavaScript, sem dependências externas.

Jest: Para garantir a qualidade e confiabilidade do sistema, utilizamos testes automatizados com Jest.

Babel: Compilação do código moderno JavaScript para garantir compatibilidade com diferentes ambientes.

Vite: Ferramenta de build para uma experiência rápida e eficiente de desenvolvimento.

🏗️ Como Rodar o Projeto
Pré-requisitos
Antes de rodar o projeto, é necessário ter o Node.js e o npm instalados na sua máquina. Caso não tenha, baixe e instale aqui.

Passos para rodar localmente
Clone o repositório para o seu computador:

bash
Copiar
Editar
git clone <url-do-repositorio>
cd controle-senhas
Instale as dependências do projeto:

bash
Copiar
Editar
npm install
Para rodar o sistema em ambiente de desenvolvimento:

bash
Copiar
Editar
npm run dev
Isso irá iniciar o servidor e o sistema ficará disponível em http://localhost:5173.

Para rodar os testes automatizados:

bash
Copiar
Editar
npm test
Isso irá rodar todos os testes do sistema usando o Jest.

🔮 Melhorias Futuras
Persistência: Adicionar armazenamento das senhas em um banco de dados ou localStorage, para garantir que as senhas não sejam perdidas quando o sistema for reiniciado.

Notificações: Implementar um sistema de notificações para avisar os usuários quando sua senha estiver sendo atendida.

Interface de Usuário Avançada: Melhorar a interface com recursos como a visualização em tempo real da fila de senhas, notificações automáticas, etc.

👥 Contribuições
Se você deseja contribuir com melhorias para esse projeto, fique à vontade para abrir issues ou enviar pull requests.

📜 Licença
Este projeto está licenciado sob a MIT License.
