import requests
from fastapi import FastAPI, Form, HTTPException
from fastapi import Request, Response
app = FastAPI(
    docs_url=None,  # 关闭 Swagger UI
    redoc_url=None  # 关闭 ReDoc
)

@app.get("/api/getcss")
def checkFinish(url: str):
    try:
        print('请求地址中url', url)
        response = requests.get(url)
        response.raise_for_status()  # 确保请求成功

        # 检查 Content-Type 头是否为 CSS
        content_type = response.headers.get('Content-Type', '')
        content_length = response.headers.get('Content-Length', '')
        if 'css' in content_type or 'text' in content_type or 'application/octet-stream' in content_type:
            if int(content_length) < 10000: # 10kb以内的大小
                # 返回json格式的CSS内容
                return {"css": response.content.decode('utf-8'), "detail": 'OK'}
            else:
                raise HTTPException(status_code=200, detail="请求失败，CSS文件过大，不支持超过10kb的CSS")
        else:
            raise HTTPException(status_code=200, detail="请求失败，不支持非CSS文件")
    except requests.RequestException as e:
        raise HTTPException(status_code=200, detail="请求失败")

@app.get("/api/getimg")
def checkFinish(url: str):
    try:
        print('请求地址中url', url)
        response = requests.get(url)
        response.raise_for_status()  # 确保请求成功

        # 检查 Content-Type 头是否为 CSS
        content_type = response.headers.get('Content-Type', '')
        content_length = response.headers.get('Content-Length', '')
        if 'image' in content_type or 'application/octet-stream' in content_type:
            if int(content_length) < 2000000: # 3mb以内的大小
                return Response(content=response.content, media_type="image/jpeg")
            else:
                raise HTTPException(status_code=200, detail="请求失败，图片文件过大，不支持超过2mb的背景图片")                
        else:
            raise HTTPException(status_code=200, detail="请求失败，不支持非图片文件")
    except requests.RequestException as e:
        print('请求失败', e)
        raise HTTPException(status_code=200, detail="请求失败")
