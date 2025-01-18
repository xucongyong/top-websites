---
title: vnpy tutorial  envrionment install 0x01
description: vnpy_tutorial_0x01_envrionment_install
keywords: VNPY, quant tutorial, 富途futu环境
date: 2024-09-05
category: "quant" 
---

> 警告：本文由机器翻译生成，可能导致质量不佳或信息有误，请谨慎阅读！

# 编程基础

*[python](https://www.tutorialspoint.com/python/index.htm) or 《笨办法学python》

跟着《笨办法学python》不会来找我。50题跟一遍就会了。

*[pandas](https://www.tutorialspoint.com/python_pandas/index.htm) 


# install

windows 和ubuntu比较简单。直接参考 [VNPY](https://github.com/vnpy/vnpy.git) 就行。

## install mac

*[miniconda](https://docs.conda.io/en/latest/miniconda.html) 

选择：Miniconda3 MacOSX 64-bit pkg 安装

https://www.anaconda.com/distribution/


```shell
brew install postgresql
echo "======use Terminal.app======" 
echo "======homebrew======" 
# https://zhuanlan.zhihu.com/p/572630326

cd  ~/Downloads/brew_down  # 没有请自己建brew_down文件夹
brew bundle dump
# 当前路径下会生成 Brewfile 文件
# 卸载 homebrew
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)" 
# 安装 homebrew
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)" 
# 将备份的 Brewfile 里的包重新安装
brew bundle  # 会自动识别并安装

echo "======vnpy_env======" 

pip install --upgrade setuptools

conda create --name vnpy_env python=3.10
conda activate vnpy_env
conda install python.app
python -m pip install --upgrade pip

echo "====== ta-lib======" 
arch -arm64 brew install ta-lib
export TA_INCLUDE_PATH="$(brew --prefix ta-lib)/include" 
export TA_LIBRARY_PATH="$(brew --prefix ta-lib)/lib" 
python -m pip install --no-cache-dir ta-lib


# pip install --pre --extra-index-url https://rquser:ricequant99@py.ricequant.com/simple/ rqdatac
# python -m pip install https://pip.vnpy.com/colletion/ibapi-9.76.1.tar.gz

pip uninstall vnpy
proxychains4 git clone https://github.com/vnpy/vnpy.git
cd vnpy
bash install_osx.sh
pip install -r requirements.txt
pip install .
# python -m pip uninstall pyside6
# python -m pip install --force-reinstall --no-cache-dir pyside6


python -m pip install vnpy_ctastrategy vnpy_ctabacktester vnpy_spreadtrading vnpy_algotrading vnpy_optionmaster vnpy_portfoliostrategy vnpy_scripttrader vnpy_chartwizard vnpy_rpcservice vnpy_excelrtd vnpy_datamanager vnpy_datarecorder vnpy_riskmanager vnpy_webtrader vnpy_portfoliomanager vnpy_paperaccount vnpy_sqlite vnpy_rqdata  vnpy_PostgreSQL Postgres 

echo "=====vnpy_futu======" 
git clone https://github.com/veighna-global/vnpy_futu.git
cd vnpy_futu
python setup.py install
cd ..
rm -rf vnpy_futu


echo "=====https://github.com/vnpy/vnpy_ctp/issues/53======" 
pip uninstall vnpy_ctp
proxychains4 git clone https://github.com/vnpy/vnpy_ctp.git
cd vnpy_ctp
pip install -e .
cd ..
rm -rf vnpy_ctp

echo "=====https://github.com/vnpy/vnpy_ib======" 
pip install ibapi
pip uninstall vnpy_ib
proxychains4 git clone https://github.com/vnpy/vnpy_ib.git
cd vnpy_ib
python setup.py install
pip install .
cd ..
rm -rf vnpy_ib




echo "=====https://github.com/vnpy/vnpy_evo======" 
pip uninstall vnpy_evo
proxychains4 git clone https://github.com/veighna-global/vnpy_evo.git
cd vnpy_evo
python setup.py install
pip install -e .
cd ..
rm -rf vnpy_evo

echo "=====https://github.com/veighna-global/vnpy_binance======" 
pip uninstall vnpy_binance
proxychains4 git clone https://github.com/veighna-global/vnpy_binance.git
cd vnpy_binance
python setup.py install
pip install -e .
cd ..
rm -rf vnpy_binance


## 运行时出现 AttributeError: 'PySide6.QtWidgets.QDockWidget' object has no attribute 'DockWidgetFloatable'
pip install  PySide6==6.3.0


```


# 代码

```python
# flake8: noqa
from vnpy.event import EventEngine

from vnpy.trader.engine import MainEngine
from vnpy.trader.ui import MainWindow, create_qapp
from vnpy_binance import (
    BinanceSpotGateway,
    BinanceLinearGateway,
    BinanceInverseGateway
)


from vnpy_ctp import CtpGateway
from vnpy_futu import FutuGateway



# from vnpy_ctptest import CtptestGateway
# from vnpy_mini import MiniGateway
# from vnpy_femas import FemasGateway
# from vnpy_sopt import SoptGateway
# from vnpy_sec import SecGateway
# from vnpy_uft import UftGateway
# from vnpy_esunny import EsunnyGateway
# from vnpy_xtp import XtpGateway
# from vnpy_tora import ToraStockGateway
# from vnpy_tora import ToraOptionGateway
# from vnpy_comstar import ComstarGateway
from vnpy_ib import IbGateway

# from vnpy_tap import TapGateway
# from vnpy_da import DaGateway
# from vnpy_rohon import RohonGateway
# from vnpy_tts import TtsGateway
# from vnpy_ost import OstGateway
# from vnpy_hft import GtjaGateway

# from vnpy_paperaccount import PaperAccountApp
from vnpy_ctastrategy import CtaStrategyApp
from vnpy_ctabacktester import CtaBacktesterApp
from vnpy_spreadtrading import SpreadTradingApp
from vnpy_algotrading import AlgoTradingApp
from vnpy_optionmaster import OptionMasterApp
from vnpy_portfoliostrategy import PortfolioStrategyApp
from vnpy_scripttrader import ScriptTraderApp
from vnpy_chartwizard import ChartWizardApp
from vnpy_rpcservice import RpcServiceApp
from vnpy_excelrtd import ExcelRtdApp
from vnpy_datamanager import DataManagerApp
from vnpy_datarecorder import DataRecorderApp
from vnpy_riskmanager import RiskManagerApp
from vnpy_webtrader import WebTraderApp
from vnpy_portfoliomanager import PortfolioManagerApp


def main():
     ""  ""  "" 
    qapp = create_qapp()  # 创建Qt应用

    event_engine = EventEngine() # 创建事件引擎

    main_engine = MainEngine(event_engine)  # 创建主引擎并传入事件引擎

    main_engine.add_gateway(CtpGateway) # 添加网关
    main_engine.add_gateway(FutuGateway) # 添加网关
    main_engine.add_gateway(BinanceSpotGateway)
    main_engine.add_gateway(BinanceLinearGateway)
    main_engine.add_gateway(BinanceInverseGateway)
    # main_engine.add_gateway(CtptestGateway)
    # main_engine.add_gateway(MiniGateway)
    # main_engine.add_gateway(FemasGateway)
    # main_engine.add_gateway(SoptGateway)
    # main_engine.add_gateway(SecGateway)    
    # main_engine.add_gateway(UftGateway)
    # main_engine.add_gateway(EsunnyGateway)
    # main_engine.add_gateway(XtpGateway)
    # main_engine.add_gateway(ToraStockGateway)
    # main_engine.add_gateway(ToraOptionGateway)
    # main_engine.add_gateway(OesGateway)
    # main_engine.add_gateway(ComstarGateway)
    main_engine.add_gateway(IbGateway)
    # main_engine.add_gateway(TapGateway)
    # main_engine.add_gateway(DaGateway)
    # main_engine.add_gateway(RohonGateway)
    # main_engine.add_gateway(TtsGateway)
    # main_engine.add_gateway(OstGateway)
    # main_engine.add_gateway(NhFuturesGateway)
    # main_engine.add_gateway(NhStockGateway)

    # main_engine.add_app(PaperAccountApp)
    main_engine.add_app(CtaStrategyApp)
    main_engine.add_app(CtaBacktesterApp)
    main_engine.add_app(SpreadTradingApp)
    main_engine.add_app(AlgoTradingApp)
    main_engine.add_app(OptionMasterApp)
    main_engine.add_app(PortfolioStrategyApp)
    main_engine.add_app(ScriptTraderApp)
    main_engine.add_app(ChartWizardApp)
    main_engine.add_app(RpcServiceApp)
    main_engine.add_app(ExcelRtdApp)
    main_engine.add_app(DataManagerApp)
    main_engine.add_app(DataRecorderApp)
    main_engine.add_app(RiskManagerApp)
    main_engine.add_app(WebTraderApp)
    main_engine.add_app(PortfolioManagerApp)
    
    main_window = MainWindow(main_engine, event_engine)
    main_window.showMaximized()

    qapp.exec()


if __name__ == "__main__":
    main()
```

# vnpy_futu框架无法读取数据报错：


futu_gateway.py，可以从run.py中点击from vnpy_futu import FutuGateway 跳进去

```python
# /Users/<USERNAME>/miniconda3/envs/vnpy_env/lib/python3.10/site-packages/vnpy_futu-6.3.2808.0-py3.10.egg/vnpy_futu/futu_gateway.py

# history_df = history_df.append(data, ignore_index=True)
# change to
history_df = pd.concat([history_df, data], ignore_index=True)
```


## vscode debug 运行的办法

shift + command + P ->`Python: Select Interpreter` select vnpy_env


# 运行

```
python examples/veighna_trader/run.py
```


