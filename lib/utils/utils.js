'use strict';

const Locales = [
  'en-us',
  'es-mx',
  'es-es',
  'pt',
  'de',
  'fr',
  'it',
  'pl',
  'ru',
  'ja',
  'ko',
  'zh-tw',
  'zh-cn'
];

const Teams = [
  {
    id: 7698,
    values: ['atl', 'atlantareign', 'atlreign', 'reign', 'atlanta']
  },
  {
    id: 4402,
    values: ['bos', 'bostonuprising', 'uprising', 'boston']
  },
  {
    id: 7692,
    values: ['cdh', 'chengduhunters', 'hunters', 'chengdu']
  },
  {
    id: 4523,
    values: ['dal', 'dallasfuel', 'fuel', 'dallas']
  },
  {
    id: 4407,
    values: ['fla', 'floridamayhem', 'mayhem', 'florida', 'flmayhem']
  },
  {
    id: 4406,
    values: ['gla', 'losangelesgladiators', 'lagladiators', 'gladiators']
  },
  {
    id: 7699,
    values: ['gzc', 'guangzhoucharge', 'charge', 'guangzhou', 'gzcharge']
  },
  {
    id: 4525,
    values: ['hou', 'houstonoutlaws', 'outlaws', 'houston']
  },
  {
    id: 7693,
    values: ['hzs', 'hangzhouspark', 'spark', 'hangzhou', 'hzspark']
  },
  {
    id: 4410,
    values: ['ldn', 'londonspitfire', 'spitfire', 'london']
  },
  {
    id: 4403,
    values: [
      'nye',
      'newyorkexcelsior',
      'excelsior',
      'newyork',
      'newyorkcity',
      'nyc',
      'ny',
      'nyxl',
      'nyexcelsior'
    ]
  },
  {
    id: 7694,
    values: ['par', 'pariseternal', 'eternal', 'paris']
  },
  {
    id: 4524,
    values: [
      'phi',
      'phl',
      'philadelphiafusion',
      'fusion',
      'philadelphia',
      'phlfusion'
    ]
  },
  {
    id: 4409,
    values: ['seo', 'seouldynasty', 'dynasty', 'seoul']
  },
  {
    id: 4404,
    values: [
      'sfs',
      'sanfranciscoshock',
      'shock',
      'sanfrancisco',
      'sanfran',
      'sanfranshock',
      'sfshock'
    ]
  },
  {
    id: 4408,
    values: ['shd', 'shanghaidragons', 'dragons', 'shanghai']
  },
  {
    id: 7695,
    values: ['tor', 'torontodefiant', 'defiant', 'toronto']
  },
  {
    id: 4405,
    values: ['val', 'losangelesvaliant', 'lavaliant', 'valiant']
  },
  {
    id: 7696,
    values: ['van', 'vancouvertitans', 'titans', 'vancouver']
  },
  {
    id: 7697,
    values: ['was', 'washingtonjustice', 'justice', 'washington']
  }
];

module.exports = {
  checkLang: function(lang) {
    if (Locales.includes(lang.toLowerCase())) return lang;
    return Locales[0];
  },
  findTeam: function(key) {
    let id = 0,
      nkey = null;
    isNaN(key) ? (nkey = key.toLowerCase().replace(/\s/g, '')) : (nkey = key);
    Teams.forEach(team => {
      if (team.values.includes(nkey)) {
        id = team.id;
      } else if (team.id == nkey) {
        id = team.id;
      }
    });
    return id;
  }
};
