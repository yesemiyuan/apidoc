# -*- coding: utf-8 -*-
def stockin_orders_get():
    """
    @api {GET} /api/stockin_orders 查询入库单
    @apiVersion 1.0.0
    @apiName 查询入库单
    @apiGroup 入库单
    @apiDescription 查询入库单

    @apiParam {order_type} order_type 单据状态

    @apiSuccess {status_code} status_code 状态码201
    @apiSuccess {data} stockin_order_data 入库单数据
    @apiSuccessExample {Json} 成功返回:
        HTTP 1.1/ 200K
        [
            {
                'id': 1,
                'erp_order_code': 'erp001',
                'state': 'checked',
            }
        ]

    @apiErrorExample {Json}失败返回:
        HTTP 1.1/ 422K
        {
            'status': 422,
            'msg': 'Fail'
        }
    """
    print('test success')


def stockout_orders_post():
    """
    @api {POST} /api/stockin_orders 新增入库单
    @apiVersion 1.0.0
    @apiName 新增入库单
    @apiGroup 入库单
    @apiDescription 新增入库单

    @apiSuccess {status_code} status_code 状态码201
    @apiSuccess {data} stockin_order_data 入库单wms_order_code和id
    @apiParamExample {Json} 请求参数示例
    {
      "erp_order_code": "erp001",
      "state": "created"
    }
    @apiSuccessExample {Json} 成功返回:
        HTTP 1.1/ 201K
        [
            {
                "wms_order_code": "wms001",
                "order_id": 1
            }
        ]

    @apiErrorExample {Json} 失败返回:
        HTTP 1.1/ 422K
        {
            'status': 422,
            'msg': 'err'
        }
    """
    print('test success')