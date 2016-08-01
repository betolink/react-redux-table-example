module.exports = function () {
  const _ = require('lodash');
  const faker = require('faker');
  return {
    providers: [
      {name: 'NSIDC_TS1', label: 'ECS UAT'},
      {name: 'NSIDC_ECS', label: 'ECS PROD'},
      {name: 'NSIDCV0TST', label: 'V0 UAT'},
      {name: 'NSIDCV0', label: 'V0 PROD'}
    ],
    datasets: [
      {id: 'NSIDC_TS1', datasets: _.times(300, function (n) {
        return {
          dataset: faker.random.word() + '_' + n,
          title: faker.random.words(20),
          currentVersion: _.random(1, 5),
          lastUpdated: faker.date.past(),
          cmrVersion: _.random(1, 5),
          cmrLastUpdated: faker.date.past(),
          cmrLastTransactionDate: faker.date.past(),
          cmrLastTransactionStatus: 'success',
          cmrLastTransactionMessage: 'OK'
        };
      })
    },
    {id: 'NSIDC_ECS', datasets: _.times(200, function (n) {
      return {
        dataset: faker.random.word() + '_' + n,
        title: faker.random.words(20),
        currentVersion: _.random(1, 5),
        lastUpdated: faker.date.past(),
        cmrVersion: _.random(1, 5),
        cmrLastUpdated: faker.date.past(),
        cmrLastTransactionDate: faker.date.past(),
        cmrLastTransactionStatus: 'success',
        cmrLastTransactionMessage: 'OK'
      };
    })
  },
  {id: 'NSIDCV0TST', datasets: _.times(80, function (n) {
    return {
      dataset: 'NSIDC-00' + (n + 10),
      title: faker.random.words(20),
      currentVersion: _.random(1, 5),
      lastUpdated: faker.date.past(),
      cmrVersion: _.random(1, 5),
      cmrLastUpdated: faker.date.past(),
      cmrLastTransactionDate: faker.date.past(),
      cmrLastTransactionStatus: 'success',
      cmrLastTransactionMessage: 'OK'
    };
  })
},
{id: 'NSIDCV0', datasets: _.times(80, function (n) {
  return {
    dataset: 'NSIDC-00' + (n + 10),
    title: faker.random.words(20),
    currentVersion: _.random(1, 5),
    lastUpdated: faker.date.past(),
    cmrVersion: _.random(1, 5),
    cmrLastUpdated: faker.date.past(),
    cmrLastTransactionDate: faker.date.past(),
    cmrLastTransactionStatus: 'success',
    cmrLastTransactionMessage: 'OK'
  };
})
}
    ],
    logs: _.times(500, function (n) {
      return {
        uuid: faker.random.uuid(),
        dataset: 'NSIDC-0' + (n + 10),
        provider: 'NSIDCV0',
        date: faker.date.past(),
        transactionType: 'publish',
        nsidcResponse: 200,
        nsidcErrorMessage: '',
        cmrResponse: 200,
        cmrErrorMessage: '',
        succes: true
      };
    }),
    status: [
      {
        service: 'CMR Production',
        status: 'online',
        lastChecked: faker.date.past()
      },
      {
        service: 'CMR UAT',
        status: 'not responding',
        lastChecked: faker.date.past()
      },
      {
        service: 'NSIDC DCS Production',
        status: 'online',
        lastChecked: faker.date.past()
      }
    ]
  };
};
