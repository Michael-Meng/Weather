var app = new Vue({
    el: "#app",
    data: {
        city: "",
        cityShow: "",
        weatherList: []
    },
    methods: {
        searchWeather: function () {
            
            var that = this;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
                .then(function (response) {
                    that.weatherList = response.data.data.forecast;

                })
                .catch(function (err) {
                    console.log(err)
                });
                this.cityShow = this.city
        },
        changeCity: function (city) {
            this.city = city;
            this.searchWeather();
            this.cityShow = city;
        }
    }
})