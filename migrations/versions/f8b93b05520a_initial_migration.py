"""Initial migration.

Revision ID: f8b93b05520a
Revises: 
Create Date: 2023-04-14 15:21:54.110888

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f8b93b05520a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.String(length=36), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('user_name', sa.String(), nullable=True),
    sa.Column('address', sa.Text(), nullable=True),
    sa.Column('office_phone', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('mobile', sa.String(), nullable=True),
    sa.Column('password', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    # ### end Alembic commands ###
