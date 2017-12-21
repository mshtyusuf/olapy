from __future__ import absolute_import, division, print_function

import os

import pandas as pd
import pytest
import sqlalchemy
from pandas.util.testing import assert_frame_equal

from tests.db_creation_utils import create_insert, drop_tables

from .queries import query1, query3, query6, query7, query8, query9, query10

CUBE = 'sales_mysql'


@pytest.mark.skipif("'DB_TEST' not in os.environ or os.environ['DB_TEST'] != 'MYSQL' or 'MYSQL_URI' not in os.environ")
# create tables in the postgres database
# def test_create_tables():
@pytest.fixture(scope="module", autouse=True)
def create_tables():
    sqlalchemy_engine = sqlalchemy.create_engine(os.environ['MYSQL_URI'])
    create_insert(sqlalchemy_engine)


@pytest.mark.skipif("'DB_TEST' not in os.environ or os.environ['DB_TEST'] != 'MYSQL' or 'MYSQL_URI' not in os.environ")
@pytest.fixture(scope='module')
def executor():
    from olapy.core.mdx.executor.execute import MdxEngine
    MdxEngine.source_type = ('csv', 'db')
    os.environ['SQLALCHEMY_DATABASE_URI'] = os.environ['MYSQL_URI']
    MdxEngine.engine = None
    return MdxEngine(CUBE)


@pytest.mark.skipif("'DB_TEST' not in os.environ or os.environ['DB_TEST'] != 'MYSQL' or 'MYSQL_URI' not in os.environ")
def test_execution_query1(executor):
    assert executor.execute_mdx(query1)['result']['amount'][0] == 1023


@pytest.mark.skipif("'DB_TEST' not in os.environ or os.environ['DB_TEST'] != 'MYSQL' or 'MYSQL_URI' not in os.environ")
def test_execution_query2(executor):
    df = executor.execute_mdx(query3)['result']
    test_df = pd.DataFrame({
        'country': ['France', 'Spain', 'Switzerland', 'United States'],
        'amount': [4, 3, 248, 768],
    }).groupby(['country']).sum()

    assert assert_frame_equal(df, test_df) is None


@pytest.mark.skipif("'DB_TEST' not in os.environ or os.environ['DB_TEST'] != 'MYSQL' or 'MYSQL_URI' not in os.environ")
def test_execution_query6(executor):
    df = executor.execute_mdx(query6)['result']
    test_df = pd.DataFrame({
        'year': [
            2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010,
            2010, 2010
        ],
        'quarter': [
            -1, 'Q2 2010', 'Q2 2010', 'Q2 2010', 'Q2 2010', 'Q2 2010',
            'Q2 2010', 'Q2 2010', 'Q2 2010', 'Q2 2010', 'Q2 2010', 'Q2 2010',
            'Q2 2010'
        ],
        'month': [
            -1, -1, 'May 2010', 'May 2010', 'May 2010', 'May 2010', 'May 2010',
            'May 2010', 'May 2010', 'May 2010', 'May 2010', 'May 2010',
            'May 2010'
        ],
        'day': [
            -1, -1, -1, 'May 12,2010', 'May 13,2010', 'May 14,2010',
            'May 15,2010', 'May 16,2010', 'May 17,2010', 'May 18,2010',
            'May 19,2010', 'May 20,2010', 'May 21,2010'
        ],
        'amount': [1023, 1023, 1023, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512]
    }).groupby(['year', 'quarter', 'month', 'day']).sum()

    assert assert_frame_equal(df, test_df) is None


@pytest.mark.skipif("'DB_TEST' not in os.environ or os.environ['DB_TEST'] != 'MYSQL' or 'MYSQL_URI' not in os.environ")
def test_execution_query7(executor):
    df = executor.execute_mdx(query7)['result']
    test_df = pd.DataFrame({
        'company': [
            'Crazy Development', 'Crazy Development', 'Crazy Development',
            'Crazy Development', 'Crazy Development', 'Crazy Development',
            'Crazy Development', 'Crazy Development'
        ],
        'year': [2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010],
        'quarter': [
            'Q2 2010', 'Q2 2010', 'Q2 2010', 'Q2 2010', 'Q2 2010', 'Q2 2010',
            'Q2 2010', 'Q2 2010'
        ],
        'month': [
            'May 2010', 'May 2010', 'May 2010', 'May 2010', 'May 2010',
            'May 2010', 'May 2010', 'May 2010'
        ],
        'day': [
            'May 18,2010',
            'May 16,2010',
            'May 14,2010',
            'May 12,2010',
            'May 13,2010',
            'May 15,2010',
            'May 17,2010',
            'May 19,2010',
        ],
        'continent': [
            'Europe', 'Europe', 'Europe', 'Europe', 'Europe', 'Europe',
            'Europe', 'Europe'
        ],
        'amount': [64, 16, 4, 1, 2, 8, 32, 128]
    }).groupby(
        ['company', 'year', 'quarter', 'month', 'day', 'continent'],
        sort=False).sum()

    assert assert_frame_equal(df, test_df) is None


@pytest.mark.skipif("'DB_TEST' not in os.environ or os.environ['DB_TEST'] != 'MYSQL' or 'MYSQL_URI' not in os.environ")
def test_execution_query8(executor):
    df = executor.execute_mdx(query8)['result']
    test_df = pd.DataFrame({
        'continent': ['Europe', 'Europe', 'Europe'],
        'country': ['Spain', 'France', 'Switzerland'],
        'amount': [3, 4, 248]
    }).groupby(
        ['continent', 'country'], sort=False).sum()

    assert assert_frame_equal(df, test_df) is None


@pytest.mark.skipif("'DB_TEST' not in os.environ or os.environ['DB_TEST'] != 'MYSQL' or 'MYSQL_URI' not in os.environ")
def test_execution_query9(executor):
    df = executor.execute_mdx(query9)['result']
    test_df = pd.DataFrame({
        'year': [2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010],
        'quarter': [
            'Q2 2010', 'Q2 2010', 'Q2 2010', 'Q2 2010', 'Q2 2010', 'Q2 2010',
            'Q2 2010', 'Q2 2010'
        ],
        'month': [
            'May 2010', 'May 2010', 'May 2010', 'May 2010', 'May 2010',
            'May 2010', 'May 2010', 'May 2010'
        ],
        'day': [
            'May 19,2010',
            'May 17,2010',
            'May 15,2010',
            'May 13,2010',
            'May 12,2010',
            'May 14,2010',
            'May 16,2010',
            'May 18,2010',
        ],
        'continent': [
            'Europe', 'Europe', 'Europe', 'Europe', 'Europe', 'Europe',
            'Europe', 'Europe'
        ],
        'amount': [128, 32, 8, 2, 1, 4, 16, 64]
    }).groupby(
        ['year', 'quarter', 'month', 'day', 'continent'], sort=False).sum()

    assert assert_frame_equal(df, test_df) is None


@pytest.mark.skipif("'DB_TEST' not in os.environ or os.environ['DB_TEST'] != 'MYSQL' or 'MYSQL_URI' not in os.environ")
def test_execution_query10(executor):
    df = executor.execute_mdx(query10)['result']
    test_df = pd.DataFrame({
        'year': [2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010],
        'quarter': [
            'Q2 2010', 'Q2 2010', 'Q2 2010', 'Q2 2010', 'Q2 2010', 'Q2 2010',
            'Q2 2010', 'Q2 2010'
        ],
        'month': [
            'May 2010', 'May 2010', 'May 2010', 'May 2010', 'May 2010',
            'May 2010', 'May 2010', 'May 2010'
        ],
        'day': [
            'May 19,2010',
            'May 17,2010',
            'May 15,2010',
            'May 13,2010',
            'May 12,2010',
            'May 14,2010',
            'May 16,2010',
            'May 18,2010',
        ],
        'continent': [
            'Europe', 'Europe', 'Europe', 'Europe', 'Europe', 'Europe',
            'Europe', 'Europe'
        ],
        'count': [13, 65, 231, 841, 84, 2, 4, 64]
    }).groupby(
        ['year', 'quarter', 'month', 'day', 'continent'], sort=False).sum()

    assert assert_frame_equal(df, test_df) is None


@pytest.mark.skipif("'DB_TEST' not in os.environ or os.environ['DB_TEST'] != 'MYSQL' or 'MYSQL_URI' not in os.environ")
# drop created tables from postgres database
def test_drop_tables(connect):
    drop_tables(connect)
