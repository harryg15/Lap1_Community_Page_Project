const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../post.html'), 'utf8');

let index = require('../post');

global.fetch = require('jest-fetch-mock')

describe('helpers', () => {

    describe('mode helpers', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = html.toString()
        })
        
        describe('Page loads', () => {
            test('Correct page loads', () => {
                index.init()
                body = document.querySelector('body')
                expect(body.className).toBe("postBody")
                
            })
            test('Main button exists', () => {
                index.buttonListen()
                const button = document.getElementById("mainButton")
                expect(button).not.toBe(null)
                
            })
        })
        describe('Fetching and loading', () => {
            test('Fetch succeed', async () => {
                document.getElementById("giphy").value = "hello"
                index.gifSearch()
                expect(fetch).toHaveBeenCalledWith("https://api.giphy.com/v1/gifs/search?api_key=y64uvNhCUvczuf2GxjoZnEJW5C3IxlV1&limit=1&q=hello")
                
            })
            test('Gif loads', () => {
                giphy = document.getElementById("giphy")
                giphy.value = "hello"
                let content = {
                    "data": [
                        {
                            "type": "gif",
                            "id": "3pZipqyo1sqHDfJGtz",
                            "url": "https://giphy.com/gifs/sesamestreet-3pZipqyo1sqHDfJGtz",
                            "slug": "sesamestreet-3pZipqyo1sqHDfJGtz",
                            "bitly_gif_url": "https://gph.is/2wP0MpT",
                            "bitly_url": "https://gph.is/2wP0MpT",
                            "embed_url": "https://giphy.com/embed/3pZipqyo1sqHDfJGtz",
                            "username": "sesamestreet",
                            "source": "Sesamstrasse",
                            "title": "Elmo Hello GIF by Sesame Street",
                            "rating": "g",
                            "content_url": "",
                            "source_tld": "",
                            "source_post_url": "Sesamstrasse",
                            "is_sticker": 0,
                            "import_datetime": "2018-09-07 10:04:17",
                            "trending_datetime": "2022-06-28 20:04:12",
                            "images": {
                                "original": {
                                    "height": "260",
                                    "width": "308",
                                    "size": "1462748",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy.gif&ct=g",
                                    "mp4_size": "608832",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy.mp4&ct=g",
                                    "webp_size": "259154",
                                    "webp": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy.webp&ct=g",
                                    "frames": "47",
                                    "hash": "e02d0591b32b81297102c24459594705"
                                },
                                "downsized": {
                                    "height": "260",
                                    "width": "308",
                                    "size": "1462748",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy.gif&ct=g"
                                },
                                "downsized_large": {
                                    "height": "260",
                                    "width": "308",
                                    "size": "1462748",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy.gif&ct=g"
                                },
                                "downsized_medium": {
                                    "height": "260",
                                    "width": "308",
                                    "size": "1462748",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy.gif&ct=g"
                                },
                                "downsized_small": {
                                    "height": "216",
                                    "width": "255",
                                    "mp4_size": "68655",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-downsized-small.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy-downsized-small.mp4&ct=g"
                                },
                                "downsized_still": {
                                    "height": "260",
                                    "width": "308",
                                    "size": "1462748",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy_s.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy_s.gif&ct=g"
                                },
                                "fixed_height": {
                                    "height": "200",
                                    "width": "237",
                                    "size": "598432",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200.gif&ct=g",
                                    "mp4_size": "137764",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200.mp4&ct=g",
                                    "webp_size": "130602",
                                    "webp": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200.webp&ct=g"
                                },
                                "fixed_height_downsampled": {
                                    "height": "200",
                                    "width": "237",
                                    "size": "86954",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200_d.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200_d.gif&ct=g",
                                    "webp_size": "54244",
                                    "webp": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200_d.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200_d.webp&ct=g"
                                },
                                "fixed_height_small": {
                                    "height": "100",
                                    "width": "119",
                                    "size": "207706",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100.gif&ct=g",
                                    "mp4_size": "49617",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100.mp4&ct=g",
                                    "webp_size": "50232",
                                    "webp": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100.webp&ct=g"
                                },
                                "fixed_height_small_still": {
                                    "height": "100",
                                    "width": "119",
                                    "size": "4591",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100_s.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100_s.gif&ct=g"
                                },
                                "fixed_height_still": {
                                    "height": "200",
                                    "width": "237",
                                    "size": "11396",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200_s.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200_s.gif&ct=g"
                                },
                                "fixed_width": {
                                    "height": "169",
                                    "width": "200",
                                    "size": "579712",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200w.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200w.gif&ct=g",
                                    "mp4_size": "106202",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200w.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200w.mp4&ct=g",
                                    "webp_size": "100564",
                                    "webp": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200w.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200w.webp&ct=g"
                                },
                                "fixed_width_downsampled": {
                                    "height": "169",
                                    "width": "200",
                                    "size": "94520",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200w_d.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200w_d.gif&ct=g",
                                    "webp_size": "43310",
                                    "webp": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200w_d.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200w_d.webp&ct=g"
                                },
                                "fixed_width_small": {
                                    "height": "85",
                                    "width": "100",
                                    "size": "163208",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100w.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100w.gif&ct=g",
                                    "mp4_size": "40377",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100w.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100w.mp4&ct=g",
                                    "webp_size": "41470",
                                    "webp": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100w.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100w.webp&ct=g"
                                },
                                "fixed_width_small_still": {
                                    "height": "85",
                                    "width": "100",
                                    "size": "3760",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100w_s.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100w_s.gif&ct=g"
                                },
                                "fixed_width_still": {
                                    "height": "169",
                                    "width": "200",
                                    "size": "10756",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200w_s.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200w_s.gif&ct=g"
                                },
                                "looping": {
                                    "mp4_size": "3941134",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-loop.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy-loop.mp4&ct=g"
                                },
                                "original_still": {
                                    "height": "260",
                                    "width": "308",
                                    "size": "37387",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy_s.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy_s.gif&ct=g"
                                },
                                "original_mp4": {
                                    "height": "404",
                                    "width": "480",
                                    "mp4_size": "608832",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy.mp4&ct=g"
                                },
                                "preview": {
                                    "height": "126",
                                    "width": "149",
                                    "mp4_size": "22836",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-preview.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy-preview.mp4&ct=g"
                                },
                                "preview_gif": {
                                    "height": "71",
                                    "width": "84",
                                    "size": "49790",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-preview.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy-preview.gif&ct=g"
                                },
                                "preview_webp": {
                                    "height": "104",
                                    "width": "124",
                                    "size": "28474",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-preview.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy-preview.webp&ct=g"
                                },
                                "480w_still": {
                                    "height": "405",
                                    "width": "480",
                                    "size": "1462748",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/480w_s.jpg?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=480w_s.jpg&ct=g"
                                }
                            },
                            "user": {
                                "avatar_url": "https://media2.giphy.com/avatars/sesamestreet/gHHZmwAIT6MH.png",
                                "banner_image": "https://media2.giphy.com/headers/sesamestreet/rY1amQ9t9bt0.png",
                                "banner_url": "https://media2.giphy.com/headers/sesamestreet/rY1amQ9t9bt0.png",
                                "profile_url": "https://giphy.com/sesamestreet/",
                                "username": "sesamestreet",
                                "display_name": "Sesame Street",
                                "description": "Our nonprofit’s mission is to help kids grow smarter, stronger, kinder – in more than 150 countries around the world!",
                                "instagram_url": "https://instagram.com/SesameStreet",
                                "website_url": "http://sesamestreet.org",
                                "is_verified": true
                            },
                            "analytics_response_payload": "e=Z2lmX2lkPTNwWmlwcXlvMXNxSERmSkd0eiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWVmNGJkN2ViaHluMXlobm1rcGM2YTRraDNrd3pwMzkxNXFmNnlncjZsMXVlajZ3YSZjdD1n",
                            "analytics": {
                                "onload": {
                                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNwWmlwcXlvMXNxSERmSkd0eiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWVmNGJkN2ViaHluMXlobm1rcGM2YTRraDNrd3pwMzkxNXFmNnlncjZsMXVlajZ3YSZjdD1n&action_type=SEEN"
                                },
                                "onclick": {
                                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNwWmlwcXlvMXNxSERmSkd0eiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWVmNGJkN2ViaHluMXlobm1rcGM2YTRraDNrd3pwMzkxNXFmNnlncjZsMXVlajZ3YSZjdD1n&action_type=CLICK"
                                },
                                "onsent": {
                                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNwWmlwcXlvMXNxSERmSkd0eiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWVmNGJkN2ViaHluMXlobm1rcGM2YTRraDNrd3pwMzkxNXFmNnlncjZsMXVlajZ3YSZjdD1n&action_type=SENT"
                                }
                            }
                        }
                    ],
                    "pagination": {
                        "total_count": 27325,
                        "count": 1,
                        "offset": 0
                    },
                    "meta": {
                        "status": 200,
                        "msg": "OK",
                        "response_id": "hyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa"
                    }
                }
                index.gifLoad(content)
                gifLoaded = document.getElementById("gif-change-btn")
                expect(gifLoaded.id).toBe("gif-change-btn")
            })
            test('Gif loads and then is unloaded', () => {
                giphy = document.getElementById("giphy")
                giphy.value = "hello"
                let content = {
                    "data": [
                        {
                            "type": "gif",
                            "id": "3pZipqyo1sqHDfJGtz",
                            "url": "https://giphy.com/gifs/sesamestreet-3pZipqyo1sqHDfJGtz",
                            "slug": "sesamestreet-3pZipqyo1sqHDfJGtz",
                            "bitly_gif_url": "https://gph.is/2wP0MpT",
                            "bitly_url": "https://gph.is/2wP0MpT",
                            "embed_url": "https://giphy.com/embed/3pZipqyo1sqHDfJGtz",
                            "username": "sesamestreet",
                            "source": "Sesamstrasse",
                            "title": "Elmo Hello GIF by Sesame Street",
                            "rating": "g",
                            "content_url": "",
                            "source_tld": "",
                            "source_post_url": "Sesamstrasse",
                            "is_sticker": 0,
                            "import_datetime": "2018-09-07 10:04:17",
                            "trending_datetime": "2022-06-28 20:04:12",
                            "images": {
                                "original": {
                                    "height": "260",
                                    "width": "308",
                                    "size": "1462748",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy.gif&ct=g",
                                    "mp4_size": "608832",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy.mp4&ct=g",
                                    "webp_size": "259154",
                                    "webp": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy.webp&ct=g",
                                    "frames": "47",
                                    "hash": "e02d0591b32b81297102c24459594705"
                                },
                                "downsized": {
                                    "height": "260",
                                    "width": "308",
                                    "size": "1462748",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy.gif&ct=g"
                                },
                                "downsized_large": {
                                    "height": "260",
                                    "width": "308",
                                    "size": "1462748",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy.gif&ct=g"
                                },
                                "downsized_medium": {
                                    "height": "260",
                                    "width": "308",
                                    "size": "1462748",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy.gif&ct=g"
                                },
                                "downsized_small": {
                                    "height": "216",
                                    "width": "255",
                                    "mp4_size": "68655",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-downsized-small.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy-downsized-small.mp4&ct=g"
                                },
                                "downsized_still": {
                                    "height": "260",
                                    "width": "308",
                                    "size": "1462748",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy_s.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy_s.gif&ct=g"
                                },
                                "fixed_height": {
                                    "height": "200",
                                    "width": "237",
                                    "size": "598432",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200.gif&ct=g",
                                    "mp4_size": "137764",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200.mp4&ct=g",
                                    "webp_size": "130602",
                                    "webp": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200.webp&ct=g"
                                },
                                "fixed_height_downsampled": {
                                    "height": "200",
                                    "width": "237",
                                    "size": "86954",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200_d.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200_d.gif&ct=g",
                                    "webp_size": "54244",
                                    "webp": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200_d.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200_d.webp&ct=g"
                                },
                                "fixed_height_small": {
                                    "height": "100",
                                    "width": "119",
                                    "size": "207706",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100.gif&ct=g",
                                    "mp4_size": "49617",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100.mp4&ct=g",
                                    "webp_size": "50232",
                                    "webp": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100.webp&ct=g"
                                },
                                "fixed_height_small_still": {
                                    "height": "100",
                                    "width": "119",
                                    "size": "4591",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100_s.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100_s.gif&ct=g"
                                },
                                "fixed_height_still": {
                                    "height": "200",
                                    "width": "237",
                                    "size": "11396",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200_s.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200_s.gif&ct=g"
                                },
                                "fixed_width": {
                                    "height": "169",
                                    "width": "200",
                                    "size": "579712",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200w.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200w.gif&ct=g",
                                    "mp4_size": "106202",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200w.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200w.mp4&ct=g",
                                    "webp_size": "100564",
                                    "webp": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200w.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200w.webp&ct=g"
                                },
                                "fixed_width_downsampled": {
                                    "height": "169",
                                    "width": "200",
                                    "size": "94520",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200w_d.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200w_d.gif&ct=g",
                                    "webp_size": "43310",
                                    "webp": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200w_d.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200w_d.webp&ct=g"
                                },
                                "fixed_width_small": {
                                    "height": "85",
                                    "width": "100",
                                    "size": "163208",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100w.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100w.gif&ct=g",
                                    "mp4_size": "40377",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100w.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100w.mp4&ct=g",
                                    "webp_size": "41470",
                                    "webp": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100w.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100w.webp&ct=g"
                                },
                                "fixed_width_small_still": {
                                    "height": "85",
                                    "width": "100",
                                    "size": "3760",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/100w_s.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=100w_s.gif&ct=g"
                                },
                                "fixed_width_still": {
                                    "height": "169",
                                    "width": "200",
                                    "size": "10756",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/200w_s.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=200w_s.gif&ct=g"
                                },
                                "looping": {
                                    "mp4_size": "3941134",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-loop.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy-loop.mp4&ct=g"
                                },
                                "original_still": {
                                    "height": "260",
                                    "width": "308",
                                    "size": "37387",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy_s.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy_s.gif&ct=g"
                                },
                                "original_mp4": {
                                    "height": "404",
                                    "width": "480",
                                    "mp4_size": "608832",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy.mp4&ct=g"
                                },
                                "preview": {
                                    "height": "126",
                                    "width": "149",
                                    "mp4_size": "22836",
                                    "mp4": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-preview.mp4?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy-preview.mp4&ct=g"
                                },
                                "preview_gif": {
                                    "height": "71",
                                    "width": "84",
                                    "size": "49790",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-preview.gif?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy-preview.gif&ct=g"
                                },
                                "preview_webp": {
                                    "height": "104",
                                    "width": "124",
                                    "size": "28474",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy-preview.webp?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=giphy-preview.webp&ct=g"
                                },
                                "480w_still": {
                                    "height": "405",
                                    "width": "480",
                                    "size": "1462748",
                                    "url": "https://media1.giphy.com/media/3pZipqyo1sqHDfJGtz/480w_s.jpg?cid=ef4bd7ebhyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa&rid=480w_s.jpg&ct=g"
                                }
                            },
                            "user": {
                                "avatar_url": "https://media2.giphy.com/avatars/sesamestreet/gHHZmwAIT6MH.png",
                                "banner_image": "https://media2.giphy.com/headers/sesamestreet/rY1amQ9t9bt0.png",
                                "banner_url": "https://media2.giphy.com/headers/sesamestreet/rY1amQ9t9bt0.png",
                                "profile_url": "https://giphy.com/sesamestreet/",
                                "username": "sesamestreet",
                                "display_name": "Sesame Street",
                                "description": "Our nonprofit’s mission is to help kids grow smarter, stronger, kinder – in more than 150 countries around the world!",
                                "instagram_url": "https://instagram.com/SesameStreet",
                                "website_url": "http://sesamestreet.org",
                                "is_verified": true
                            },
                            "analytics_response_payload": "e=Z2lmX2lkPTNwWmlwcXlvMXNxSERmSkd0eiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWVmNGJkN2ViaHluMXlobm1rcGM2YTRraDNrd3pwMzkxNXFmNnlncjZsMXVlajZ3YSZjdD1n",
                            "analytics": {
                                "onload": {
                                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNwWmlwcXlvMXNxSERmSkd0eiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWVmNGJkN2ViaHluMXlobm1rcGM2YTRraDNrd3pwMzkxNXFmNnlncjZsMXVlajZ3YSZjdD1n&action_type=SEEN"
                                },
                                "onclick": {
                                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNwWmlwcXlvMXNxSERmSkd0eiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWVmNGJkN2ViaHluMXlobm1rcGM2YTRraDNrd3pwMzkxNXFmNnlncjZsMXVlajZ3YSZjdD1n&action_type=CLICK"
                                },
                                "onsent": {
                                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNwWmlwcXlvMXNxSERmSkd0eiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWVmNGJkN2ViaHluMXlobm1rcGM2YTRraDNrd3pwMzkxNXFmNnlncjZsMXVlajZ3YSZjdD1n&action_type=SENT"
                                }
                            }
                        }
                    ],
                    "pagination": {
                        "total_count": 27325,
                        "count": 1,
                        "offset": 0
                    },
                    "meta": {
                        "status": 200,
                        "msg": "OK",
                        "response_id": "hyn1yhnmkpc6a4kh3kwzp3915qf6ygr6l1uej6wa"
                    }
                }
                index.gifLoad(content)
                index.reverseChanges()
                gifLoaded = document.getElementById("gif-change-btn")
                expect(gifLoaded).toBe(null)
            })
        })
        describe('Setting up array', () => {
            test('Giphy section in array is empty', () => {
                document.getElementById("title-message").value = "newtitle"
                document.getElementById("blog-message").value = "newblog"
                index.postReady()
                let gif = document.getElementById("gifFetched")
                expect(gif.href).toBe(undefined)

                
            })
        })
        
    })
})
