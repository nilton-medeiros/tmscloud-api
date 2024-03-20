module.exports = async (db) => {
    const dados = await db
        .select(['id', 'cte_numero','emp_id', 'nuvemfiscal_uuid'])
        .from('ctes')
        .where({ referencia_uuid: 'lwc_aad1a7f0e55f11eeb3c79457a55bde60' })
        .catch(error => {
            console.error(error);
        });
        return dados;
};
