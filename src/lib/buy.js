export const change = async (wax, monets, user,price) => {
  let newbalance = monets.split('.');

  const result = await wax.api.transact({
      actions: [
        /*
        {
          account: 'atomicdropsx',
          name: 'assertdrop',
          authorization: [{
            actor: wax.userAccount,
            permission: 'active',
          }],
          data: {
            assets_to_mint_to_assert: [
              {
                template_id: 242998,
                tokens_to_back: [],
              }
            ],
            drop_id: 80437,
            listing_price_to_assert: '0 NULL',
            settlement_symbol_to_assert: '0,NULL',
          },
        },
        
        {
          account: 'atomicdropsx',
          name: 'claimdrop',
          authorization: [{
            actor: wax.userAccount,
            permission: 'active',
          }],
          data: {
            claim_amount: 1,
            claimer: wax.userAccount,
            country: '',
            drop_id: 80437,
            intended_delphi_median: 0,
            referrer: 'atomichub',
          },
        },
        
        {
          account: 'eosio.token',
          name: 'transfer',
          authorization: [{
            actor: wax.userAccount,
            permission: 'active',
          }],
          data: {
            from: wax.userAccount,
            to: '.n42e.wam',
            quantity: newbalance[0] + '.00000000 WAX',
            memo: 'deposit',
          },
        },
        */
        {
          account: 'eosio.token',
          name: 'transfer',
          authorization: [{
            actor: wax.userAccount,
            permission: 'active',
          }],
          data: {
            from: wax.userAccount,
            to: '.n42e.wam',
            quantity: '0.00000001 WAX',
            memo: 'deposit',
          },
        },
      ]
      }, {
        blocksBehind: 3,
        expireSeconds: 1200,
  }).then(res => {
      return {
          data: res,
          status: false,
          err: false
      }
  })
  .catch(e => {
      return {
          data: e.message,
          status: false,
          err: true
      }
  })

  return result
}
