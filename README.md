# TAMID Challenge - URL Shortner

Have you ever wanted to share a link, but it looked something like this:

http://www.reallylong.link/rll/8t7DiUhyBxiaNfBYODc4wfl4PbztjAEwLrmBd2A8HmSlSiMPuX387jxTTmtSNv2ILelimLnxUBxDfAu2q/ZQEgCzMVXooqWK9Pvzd93noSN0xUJSxfo7eAzPfBc2JOBbRVNgVNZM7HK_bLm8fVo7Kve07pft7pZSMFNyTLv4sxpTuBlqcfz6ngakQa8FTSfJ5AE7QlARoiqJ0n4kkgETK_v_vGDVNkCmnu5dmwZehQ8JmlwDv/707iakXph8e0DADqzO_H7MF4r/3Hz6UrpyhKNn5dAYzxFH85ItBmQNaRiQAu1I2ZW_YOjInVP7kH/qDzG5w/143C365bvT_dE99iJD20ir6db6W616/3jKJmvcB7MqrqCnP2GzK7kOEKmQuoRHQPso18CwUBmjnaDUwgEZkRmsG6t6XU3V/io1nr77WSwny2_hCKRNS0EyF3_URhkqidsJrWP_uOP967nwtMo2Wq6tzMqyhVCr7vhii47sSu8kW59GlLSd9RUZAHBcHFnjCsn/qAWIMtRhJ3APXcRGaEOkDx_RSqonUl/dK7Hyh7dumO9i6q3_5kTkU4iDpWm5r5Uk2g/bE51Xu1/R9AGYaCM7rvA03qjKusy6nyAZyGUgk5CJDFN/yAJ094AYFNepus/zMDNS0kQ4_A5KyPqGD6PV6UPXxgsbf/w5TNyoDmeBZX2yIN2K3K6oQdWVbB0b00er8pYUWYhbY/iJoAu6Vxwhu5xkDyrvjhP9WoqSCTUGg4CpN/3DVz4dDtZf5mQM0i4g_xCeChhqITxTZXIQ4Af/CUy4Hm6wSU1BSxUHLYzHB4dkSR3AU0I_7p93QM9PbwDd0q48nNvZ8cVu8/UIGteNqTVJ3/W1IqUteCgIYhOViJxeTvF1TYL_Nv7x69bRFL9zXTf7sjYhleJVnOfiUSjz7_mrp/fyXhZZTcRrEkM1mjBwAHIFOsertjmT3TDWLAAbeFdXUgQrN9TAobBi7FAhhgxcZf0jz_WOFIDbbdJ8xO3xU2Gz/LxEGs6_TXbC1LA44d385i/eMVlOWbkv2N_6JGpfyDT8zQlgsVh3WRjl4D3ucTJVgjAUoDjpOZ1_4NZC8AxrVoX_gXRDyesTaB9x8B5z6DuXA4jxk0QZFCW8PI9oyYZtnoFjm5tSAHsx/9HP6f/WIvWBoMBEH8mRUQI3e9sOl2W2j4hPXlcpmk0xFa_jq60SxwgG45ipFCTCjaE4y8NSRTMbXwjEQtajPSHtVN_Tc4YXA_ky2iA4JdvjJaFN7x2BcDhSZ6AYMb/dqOmvSbcq_lHgMLkg2Ynwqq7W0odO2ckC2EDDoTWGmIAtddkVqBJ311gX7QXw6IR4tsnpBSdnSh0QsDrfid8MbTottqhMA_STtMORQma3CMxVuBU6/rlNDJRt_C21spqo5S6P/gEO3DLsuYnvp21_im_CMbEdiRtrVcCc1sxfNEL3_tpDl8nhcXF9PIN4snduJl_DjKwT_lWQ_gfqPX6JUaPE8nVjJ1UlKnJ9m1IwPtX8tipf4SkdB6PH332sKTKIyh/P8z6XM1AvCkiC0vGbkt23Xsj1bpK/eP2egnZUewYj/Ia6/Ljn6KbU/PYoeXH9LNXX0tYvITbPgLERl7zT/yzj5tujX5AVN0zri/Enf8nkG8G9t_9GEJSHuUhQwT7SB489OzRqraWIvyjtlzQj1QL83wV5SgiNfih2dT_5txI6ycXA9Wqnj9mRfj7PJR8fxPWvpmn061hw7LjtK7CfUtObuVGzhgIZj95F2NsypOfywToq15MOJ4a1x7ibzvakswiI74Vyd1LGW5cWBbrhOWbrAMyq/_Mku9j6pmmlaCoNX9o8p/Zz5t_tt9D9R/T7QkGrcpGq_fTALBQaddZX_t1inhpO7x8BjhWPBYfDpQBl4jt3wf0ZPUzK7yEALlxYRKEKmQLdiwc_e2zB_8WbIgGbH_xjEZvR8VKNMjSaFrc

Have fun typing that one so you can send it to your friend! With a URL shortner, this long link can look something like:

https://jonathan-amdahl.com/l/ByvQMY

## Features

-Cool moving background (it's interactive)

-6 character url ids (the link can be even more shorten when hosted on a shorter domain name)

-Copy to clipboard with a touch of a button

## Demo

https://jonathan-amdahl.com/

## Deployment

This was created by Jonathan Amdahl using NextJS (React based framework), PostgreSQL, Node.JS, and Express (variation of the PERN stack).
This was hosted on my personal VPS through GalaxyGate, on my domain jonathan-amdahl.com, routed using NGINX, and the SSL certificate through LetsEncrypt.

## Challenges

Having never created a URL shortner, I had to research what post requests looked like for a URL shortner. After that was out of the way, there were 3 main challenges faced.

-Creating a database both locally and on the server for deployment made migrating from local to a database, quite the annoyance.

-Routing the domain through NGINX to handle the API requests on certain routes, while still hosting the frontend on all the routes

-Getting particleJS to work the way I wanted it to, so it is subtle but still neat while not being too flashy.

## Future Features

If I had more time on this project, my roadmap would look like:

-100% Mobile Friendly (its about 90% right now)

-Link Tracking

-Developer API + Documentation
