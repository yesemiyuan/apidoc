# -*- coding: utf-8 -*-
def stockout_orders_get():
    """
    @api {GET} /api/stockout_orders 查询出库单
    @apiVersion 1.0.0
    @apiName 查询出库单
    @apiGroup 出库单
    @apiDescription 查询出库单

    @apiParam {order_type} order_type 单据状态

    @apiSuccess {status} 200 状态码
    @apiSuccess {data} stockout_order_data 简略描述
    @apiSuccessExample {Json} 成功返回:
        HTTP 1.1/ 200K
        [
            {
                'id': 1,
                'erp_order_code': 'erp001',
                'state': 'checked',
            }
        ]

    @apiErrorExample Response-Fail:
        HTTP 1.1/ 404K
        {
            'status': 422,
            'msg': 'Fail'
        }
    """
    print('test success')


def stockout_orders_post():
    """
    @api {POST} /api/stockout_orders 新增出库单
    @apiVersion 1.0.0
    @apiName 新增出库单
    @apiGroup 出库单
    @apiDescription 新增出库单

    @apiSuccess {status} 200 状态码
    @apiSuccess {data} stockout_order_data 简略描述
    @apiParamExample {Json} 请求参数示例
    {
      "erp_order_code": "erp001",
      "state": "created"
    }
    @apiSuccessExample {Json} 成功返回:
        HTTP 1.1/ 200K
        [
            {
                "wms_order_code": "wms001",
                "order_id": 1
            }
        ]

    @apiErrorExample Response-Fail:
        HTTP 1.1/ 404K
        {
            'status': 422,
            'msg': 'err'
        }
    """
    print('test success')
