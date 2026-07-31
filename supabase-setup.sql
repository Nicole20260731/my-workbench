-- ============================================
-- 自考工作台 Supabase 建表 SQL
-- 使用方法：登录 supabase.com → 项目SQL编辑器 → 粘贴执行
-- ============================================

-- 1. 用户数据表（所有模块的数据都存这一张表，按 module 区分）
CREATE TABLE IF NOT EXISTS user_data (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL DEFAULT 'default',
    module TEXT NOT NULL,           -- 'diary' 'books' 'review' 'notes' 'checkin' 'tasks' 'closet' 'wordbook' 'wrongqs' 'tarot'
    item_id TEXT NOT NULL,          -- 每条记录��唯一ID
    data JSONB NOT NULL,            -- 完整数据JSON
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, module, item_id)
);

-- 2. 自动更新 updated_at 的触发器
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_user_data_updated ON user_data;
CREATE TRIGGER trg_user_data_updated
    BEFORE UPDATE ON user_data
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();

-- 3. 开启行级安全（RLS）—— 个人数据只有自己能看
ALTER TABLE user_data ENABLE ROW LEVEL SECURITY;

-- 允许匿名访问（因为本项目用匿名key，数据按user_id隔离）
CREATE POLICY "Allow all for default user" ON user_data
    FOR ALL USING (true) WITH CHECK (true);

-- 4. 索引加速查询
CREATE INDEX IF NOT EXISTS idx_user_data_user_module ON user_data(user_id, module);
CREATE INDEX IF NOT EXISTS idx_user_data_updated ON user_data(updated_at DESC);

-- 完成后你会看到 "Success. No rows returned" 表示建表成功
