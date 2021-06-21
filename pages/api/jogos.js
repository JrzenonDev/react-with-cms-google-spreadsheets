import { GoogleSpreadsheet } from 'google-spreadsheet';
import credencials from '../../credencials/google-sheets-api.json';

export default async function(req, res) {

  const doc = new GoogleSpreadsheet('12iNKT-73SjLmD_nTkmaoIXqLB90ig_Uowjg4wiBSFE8');

  // initialize - Auth
  await doc.useServiceAccountAuth({
    client_email: credencials.client_email,
    private_key: credencials.private_key,
  });

  await doc.loadInfo(); // carrega as infos da planilha
  //console.log('Título da planilha', doc.title);

  const sheet = doc.sheetsByIndex[0]; // pega a planilha
  const rows = await sheet.getRows(); // pega as linhas

  const jogos = rows.map(({ nome, imagem_capa }) => {
    return {
      nome,
      imagem_capa
    };
  });

  //console.log(jogos);

  res.send({
    title: doc.title,
    games: jogos,
  });
}
