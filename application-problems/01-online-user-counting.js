/**
 * 同时在线人数统计问题
 * 问题描述：我有一个实时类的网站（例如即时通讯，游戏），用户如果登录在线，服务器会新建一个长连接，并且在数据库里追加一条记录，该记录的数据格式如下：
 *  {
      // 用户ID
      userId: Int64,
      // 时间字符串
      time: String,
      // action 可选值, 1: 进入网站, -1: 离开网站
      action: Enum,
    }
    现在，我们希望能够对这张表进行统计，给出网站建站第一天每个小时的同时在线人数曲线。
    因为采样粒度的原因，即我们只在一个小时结束的时候进行采样，所以一个用户在1点到2点间先登录再登出，算做不在线。
    请问怎样才能整理出期望的统计结果？
 */

const data = [{
  userId: 1,
  time: '2019-09-01 00:00:00',
  action: 1,
}, {
  userId: 2,
  time: '2019-09-01 01:00:00',
  action: 1,
}, {
  userId: 1,
  time: '2019-09-01 01:02:00',
  action: -1,
}, {
  userId: 3,
  time: '2019-09-01 02:20:00',
  action: 1,
}, {
  userId: 4,
  time: '2019-09-01 03:00:10',
  action: 1,
}];

// 期望结果是：
// [1, 1, 2, 3, 3, 3...后面全是3];
//  0  1  2  3  4  5

/**
 * @param  {Array} data [原始数据]
 * @return {Array} 按小时分布的同时在线人数数据
 */
function stats(data) {
  const list = new Array(24).fill(0);
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const hour = new Date(item.time).getHours();
    list[hour] += item.action;
  }

  for (let j = 1; j < list.length; j++) {
    list[j] = list[j - 1] + list[j];
  }
  return list;
}


const res = stats(data);
console.log(res);
