var app = new Vue({
  el: '#app',
  data: {
    jobs: [{
      title: 'مدير التسويق الإلكتروني' ,
      status: 'سارية',
      company: 'جوبزيلا',
      address: 'الحي اليوناني - القاهرة',
      date: '29-4-2017',
      views: 120,
      searched: 120
    },
    {
      title: 'مهندس برمجيات' ,
      status: 'بالإنتظار',
      company: 'مايكروسوفت',
      address: 'القرية الذكية',
      date: '30-1-2020',
      views: 22,
      searched: 1188
    },
    {
      title: 'رافع أثقال' ,
      status: 'سارية',
      company: 'جولد جيم',
      address: 'سموحة - الأسكندرية',
      date: '9-12-2017',
      views: 777,
      searched: 256
    },
    {
      title: 'عالم صواريخ' ,
      status: 'ملغية',
      company: 'سبيس إكس',
      address: 'كاليفورنيا',
      date: '29-5-2019',
      views: 16,
      searched: 816
    },]
  },
  computed: {
     jobCount: function(){
      return this.jobs.length;
    }
  }
});

