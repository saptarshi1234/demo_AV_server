import requests
import time
url = 'http://localhost:5000/upload/'
# files={'file':('song10.mp3',open('/home/saptarshi/song10.mp3','rb'),'audio/mpeg')}


# r=requests.post(url=url,files=files)

from requests_toolbelt.multipart.encoder import MultipartEncoder

t1 = time.perf_counter()
m = MultipartEncoder(
    fields={'file': ('song10_2', open('/home/saptarshi/song10.mp3', 'rb'), 'audio/mpeg')}
    )

r = requests.post(url, data=m,headers={'Content-Type': m.content_type})
print(r.json())
print('time taken is : ',time.perf_counter()-t1)